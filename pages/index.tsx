import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { Button, Htag, Ptag, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
        <Htag tag='h1'>sometext</Htag>
        <Htag tag='h2'>some text</Htag>
        <Htag tag='h3'>some text</Htag>
        <Button appearence="primary" className="asdasd">some text</Button>
        <Button appearence="ghost" arrow="right">some text</Button>
        <Ptag size="s">some text</Ptag>
        <Ptag size="m">some text</Ptag>
        <Ptag size="l">some text</Ptag>
        <Tag size="m" color='green'>some text</Tag>
        <Tag size="s" color='primary' href = 'https://google.com'>some text</Tag>
        <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post(process.env.NEXT_PUBLIC_DOMAIN+ '/api/top-page/find');
  return {
    props: {

    }
  };
};