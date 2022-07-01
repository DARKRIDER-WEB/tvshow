const form=document.querySelector("#form");
const button=document.querySelector("#button");
const remove=document.querySelector('#remove');
form.addEventListener("submit",async function(evt){
    evt.preventDefault();
const title=form.elements.query.value;
const config={params:{q:form.elements.query.value}};
 const res=await axios.get(`http://api.tvmaze.com/search/shows`,config);
makeimage(res.data);
/*
remove.addEventListener('click',async function(){
    const rem=await  axios.delete(res.data[0].show.image.medium);
})*/
 
    /*catch(err)
    {console.log('error');
        const h=document.createElement('h1');
        h.innerText='ERROR 404 NOT FOUND';
        document.body.append(h);
    }*/
form.elements.query.value='';
})
const makeimage=(shows)=>{

    for(let res of shows)
    {
        if(res.show.image)
        {
        const img=document.createElement('img');
        img.src=res.show.image.medium;
        document.body.append(img);
    }
}
}