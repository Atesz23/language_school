import BlogSection from "@/components/DesignAgency/Blog/BlogSection";
import Breadcrumb from "@/components/DesignAgency/common/Breadcrumb";
import { Metadata } from "next";
import { ReactElement } from "react";

// all data
import blogData from "@/constant/DesignAgency/blog/blogData";

export const metadata: Metadata = {
  title: "Blog || Language Center Cluj & Mureș - Articole și Sfaturi pentru Învățarea Limbilor",
  description:
    "Citește articolele noastre despre învățarea limbilor străine, pregătirea pentru examene, sfaturi de studiu, resurse educaționale și noutăți din lumea educației lingvistice. Ghid complet pentru studenții de limbi străine.",
  keywords: [
    "blog limbi străine",
    "articole învățare limbi",
    "sfaturi învățare engleză",
    "resurse educaționale limbi",
    "Language Center blog",
    "cum să înveți o limbă străină",
    "pregătire examene Cambridge",
    "tips IELTS",
    "ghid învățare germană",
    "metode învățare limbi străine",
    "blog educațional Cluj",
    "articole școală de limbi",
    "noutăți educație lingvistică",
    "sfaturi profesori nativi",
    "resurse gratuite limbi străine",
    "strategii învățare vocabular",
    "gramatică engleză explicată",
    "cultură și limbi străine",
    "motivație învățare limbi",
    "carieră și limbi străine",
  ],
  creator: "Language Center Cluj & Mureș",
};

const Home = (): ReactElement => {
  return (
    <>
      <Breadcrumb title="BLOG" subTitle="Articole" pageName="ARTICOLE ȘI SFATURI" />
      <BlogSection data={blogData} />
    </>
  );
};
export default Home;
