import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

const Home1 = () => {
    const [products, setproducts] = useState([]);
    const [skip, setskip] = useState(0);
    const [hasMore, sethasMore] = useState(true);
    const limit = 10;
    const [slicedArr , setSlicedArr] = useState([]);

    async function getAllData(){
       if(slicedArr.length== 0){
            let res = await fetch("https://dummyjson.com/products");
            let data = await res.json();
            console.log(data); //{products:[] , limit: , total:}
            setproducts(data.products);
            setSlicedArr(data.products.slice(skip , limit));
            setskip(limit);
       }
       else{
                if(skip >= products.length){
                    sethasMore(false);
                }
            setSlicedArr([...slicedArr , ...products.slice(skip , skip+limit)]);
            setskip(skip + limit);
       }
    }
    useEffect(()=>{
        getAllData();
    },[])
  return (
    <div>
      <h1>This is Pagination Home page</h1>

        <InfiniteScroll 
        dataLength={slicedArr.length}
        next={getAllData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p style={{ textAlign: 'center' }}>All items loaded.</p>}>
            {
                slicedArr.map((ele, i)=>{
                    return <div key={ele.id}>
                           <img src={ele.thumbnail} alt="" /> 
                           <p>{ele.title}</p>
                    </div>
                })
            }
        </InfiniteScroll>
    </div>
  )
}

export default Home1
