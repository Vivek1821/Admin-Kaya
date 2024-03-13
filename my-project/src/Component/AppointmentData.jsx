import React, { useState, useEffect } from "react";

const AppointmentData = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointment data from the API
    fetch("https://65e09bb8d3db23f76249b70d.mockapi.io/calendar-data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAppointments(data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching appointment data from API:", error);
        // Handle errors here
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="text-black w-full overflow-hidden border-[1px] border-black rounded-xl ml-4">
      <div className="ml-4 border-b-2 p-2 text-lg font-semibold">
        Client Appointment
      </div>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Contact Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Selected Time Slot
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "even:bg-gray-100 " : ""
                      }odd:bg-white even:bg-gray-100`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 w-1/4">
                        {appointment.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 w-1/4">
                        {appointment.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 w-1/4">
                        {appointment.contactNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 w-1/4">
                        {appointment.selectedTimeSlot}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentData;
