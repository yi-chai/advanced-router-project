import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) {
    return <p>{data.message}</p>;
  }

  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events." };
    //// throw new Response(
    ////   JSON.stringify({ message: "Could not fetch events.", status: 500 })
    //// );
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    return response;
  }
}



// import { Await, defer, json, useLoaderData } from "react-router-dom";
// import EventsList from "../components/EventsList";
// import { Suspense } from "react";

// function EventsPage() {
//   const { events } = useLoaderData();

//   return (
//     <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
//       <Await resolve={events.events}>
//         {(loadedEvents) => <EventsList events={loadedEvents} />}
//       </Await>
//     </Suspense>
//   );
// }

// export default EventsPage;

// async function loadEvents() {
//   const response = await fetch("http://localhost:8080/events");

//   if (!response.ok) {
//     // return { isError: true, message: "Could not fetch events." };
//     //// throw new Response(
//     ////   JSON.stringify({ message: "Could not fetch events.", status: 500 })
//     //// );
//     throw json({ message: "Could not fetch events." }, { status: 500 });
//   } else {
//     const resData = await response.json();
//     return resData.events;
//   }
// }

// export function loader() {
//   defer({
//     events: loadEvents(),
//   });
// }

