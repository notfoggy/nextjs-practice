import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { getAllPostIds, getPostData } from "../../lib/posts";

const Post = ({
  postData,
}: {
  postData: {
    id: string;
    contentHtml: string;
    title: string;
    date: string;
  };
}) => {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  // paths = [{params: {id: 'pre-rendering'}}, {params: {id: 'ssg-ssr'}} ]
  const paths = getAllPostIds();
  return {
    paths,
    // fallback
    // false : getStaticPaths로 리턴되지 않는 것은 모두 404페이지가 뜬다.
    // true : getStaticPaths로 리턴되지 않는 것은 404로 뜨지 않고, fallback 페이지가 뜨게 된다.
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
