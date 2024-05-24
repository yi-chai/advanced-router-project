// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import React from "react";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./modules/Home";
import EventsPage from "./modules/Events";
import EventDetailPage from "./modules/EventDetail";
import NewEventPage from "./modules/NewEvent";
import EditEventPage from "./modules/EditEvent";
import RootLayout from "./modules/Root";
import EventsRoot from "./modules/EventsRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            path: "",
            element: <EventsPage />,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
