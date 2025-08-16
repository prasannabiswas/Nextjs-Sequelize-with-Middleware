import Brands from "@/components/dashboard/components/Brands";
import Categories from "@/components/dashboard/components/Categories";
import FeaturesStrip from "@/components/dashboard/components/FeatureStrip";
import Hero from "@/components/dashboard/components/Hero";
import { Fragment } from "react";


export default function DashboardPage() {
    return (
        <Fragment>
            <Hero />
            <FeaturesStrip />
            <Categories />
            <Brands />
        </Fragment>
    );
}
