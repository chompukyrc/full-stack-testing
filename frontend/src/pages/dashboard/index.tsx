import Layout from "../../components/layout";
import Welcome from "../../components/dashboard/welcome";
import CardStat from "../../components/dashboard/cardStat";
import Dashboard1 from "../../components/dashboard/dashboard1";
import ReportOverview from "../../components/dashboard/reportOverview";
import Dashboard2 from "../../components/dashboard/dashboard2";

const Dashboard = () => {
    return (
        <Layout>
            <div className=" pt-8 w-full max-w-[1046px] mx-auto">
                <Welcome />
                <CardStat />
                <Dashboard1 />
                <ReportOverview />
                <Dashboard2 />
            </div>
        </Layout>
    );
};
export default Dashboard;

