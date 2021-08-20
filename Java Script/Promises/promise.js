
//another example 

const yt = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Getting data from youtube");
        resolve({videos:[1,2,3,4]})
    },2000)
})


const fb = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Getting data from facebook")
        resolve({user:"Kushal"})
    },4000)
})



Promise.all([yt,fb]).then(response=>console.log(response))

//Previous Synchronous code as promise

console.log("start")

function loginUser(name,email){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("WE have data");
            resolve({useName:name})
        },2000)
    })
}

function getVideos(name) {
    console.log(name)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("starting vid part")
            resolve(["vid1","vid2","vid3"])
        },3000)
    })
}

function vidDetail(video){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(video)
            resolve("Video title")
        },2000)
    })
}

//async await

const displayData =async () =>{
    try{
    const loginData = await loginUser("Kushal","kk@gg.com") 
    const videosData = await getVideos(loginData.userName)
    const detailData = await vidDetail(videosData[0])
    console.log(detailData)
    }
    catch(err){
        console.log("Vids not found")
    }
}
displayData()

console.log("end")

//promise .then() .catch()

const detail = loginUser("Kushal","kk@gg.com").then(result=>getVideos(result)).then(result=>vidDetail(result))



// console.log("start")

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({user:"KOKAa"})
//     },2000)
// })

// promise.then(result=>{
//     console.log(result)
// })

// console.log("end")