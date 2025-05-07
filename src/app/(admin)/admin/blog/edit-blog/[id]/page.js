import "bootstrap-icons/font/bootstrap-icons.css";
import EditBlog from "./EditBlog";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Edit Blog | YBF",
};

export default async function Page(props) {
  const { id } = await props.params; // Await params here to suppress warning
  return <EditBlog blogId={id} />;
}
