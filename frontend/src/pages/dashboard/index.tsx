import Layout from "../../components/layout";
import Welcome from "../../components/dashboard/welcome";
import Dashboard1 from "../../components/dashboard/dashboard1";
import ReportOverview from "../../components/dashboard/reportOverview";
import Dashboard2 from "../../components/dashboard/dashboard2";

const Dashboard = () => {
    return (
        <Layout>
            <div className="py-8 w-full md:max-w-[1046px] mx-auto space-y-8">
                <Welcome />
                <Dashboard1 />
                <ReportOverview />
                <Dashboard2 />
            </div>
        </Layout>
    );
};
export default Dashboard;

