const Posts = [
    {title: 'Post one', body: 'Post one body'},
    {title: 'Post two', body: 'Post two body'}
];

function getPosts() {
    Posts.forEach((data, index) => {
        console.log(data.title);
    });
}

function createPosts(data, callback) {
    Posts.push(data);
    callback();
}
createPosts({title: 'Post Three', body: 'Post three body'}, getPosts);