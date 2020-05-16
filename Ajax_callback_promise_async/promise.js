const Posts = [
    { title: 'Post one', body: 'Post one body' },
    { title: 'Post two', body: 'Post two body' }
];

function getPosts() {
    Posts.forEach((data, index) => {
        console.log(data.title);
    });
}

// Promise
function createPosts(data) {
    return new Promise((resolve, reject) => {
        Posts.push(data);
        // err chk
        const error = false;
        // const error = true;
        if (!error) {
            resolve();
        } else {
            reject('Error!');
        }
    });
}

// normal promise
// createPosts({ title: 'Post Three', body: 'Post three body' })
//     .then(getPosts)
//     .catch(err => console.log(err));

// fectch data
// const promise3 = fetch('url').then(res => res.json())

// promise all
// const promise1 = Promise.resolve('Hellow')
// const promise2 = 10
// Promise.all([promise1, promise2]).then(values => console.log(values));


// async

async function init() {
    await createPosts({ title: 'Post Three', body: 'Post three body' }); 
    getPosts();   
}

init();