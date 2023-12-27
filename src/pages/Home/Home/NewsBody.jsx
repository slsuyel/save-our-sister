import MiddleCard from "./Card/MiddleCard";
import SidebarCard from "./Card/SidebarCard";

const NewsBody = () => {
    return (
        <div className="bg-secondary-subtle row w-100 mx-auto pb-4 border-secondary-subtle border-bottom">
            <SidebarCard title={'সত্য ঘটনা'} />
            <MiddleCard />
            <SidebarCard title={'বিবিধ সংবাদ'} />


        </div>
    );
};

export default NewsBody;