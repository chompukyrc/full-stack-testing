import Layout from "../../components/layout";
import Welcome from "../../components/dashboard/welcome";
import CardStat from "../../components/dashboard/cardStat";

const Dashboard = () => {
    return (
        <Layout>
            <div className=" pt-8 w-full max-w-[1046px] mx-auto border">
                <Welcome />
                <CardStat />
            </div>
        </Layout>
    );
};
export default Dashboard;

