// Challenge / Exercise

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./modules/Home";
import EventsPage, { loader as eventsLoader } from "./modules/Events";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./modules/EventDetail";
import NewEventPage from "./modules/NewEvent";
import EditEventPage from "./modules/EditEvent";
import RootLayout from "./modules/Root";
import EventsRoot from "./modules/EventsRoot";
import ErrorPage from "./modules/Error";
import manipulateEventAction from "./modules/EventAction";
import NewsletterPage, { action as newsletterAction } from "./modules/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                loader: eventDetailLoader,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },

          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
