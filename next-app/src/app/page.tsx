"use client";
import { Footer } from "@/components/footer";
import Home from "@/components/home";
import { Nav } from "@/components/nav";

const Page = () => (
  <>
    <Nav />
    <Home className=" pt-24" />
    <Footer/>
  </>
);

export default Page;
