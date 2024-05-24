import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return <EventForm event={data.event} />;
}
export default EditEventPage;
