import React from 'react'

async function getPost(postId: string) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/posts/records/${postId}`,
        { next: {revalidate: 10 }}
        )
        if(!res.ok){
            throw new Error('Failed to fetch data');
            // 에러 발생 시 가장 가까운 error.js activated
        }
    const data = res.json();
    return data;
}

export default async function PostDetailPage({params}:any) {
    const post = await getPost(params.id);
    return (
        <div>
            <h1>posts/{post.id}</h1>
            <div>
                <h3>{post.title}</h3>
                <p>{post.created}</p>
            </div>
        </div>
    )
}
