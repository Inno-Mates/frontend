import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";

export default function DashboardPage() {
  return (
    <>
      <div className="bg-gray-50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              Welcome to your Civic Connect dashboard. Here you can track your reports, initiatives, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">12</div>
                <div className="mt-1 text-xs text-green-600">+3 from last month</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Resolved Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">8</div>
                <div className="mt-1 text-xs text-green-600">75% resolution rate</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Pending Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">4</div>
                <div className="mt-1 text-xs text-yellow-600">2 in progress</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900">3</div>
                <div className="mt-1 text-xs text-blue-600">Upcoming this month</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Reports</CardTitle>
                  <CardDescription>Your most recent issue reports and their status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3">Report ID</th>
                          <th scope="col" className="px-6 py-3">Issue</th>
                          <th scope="col" className="px-6 py-3">Location</th>
                          <th scope="col" className="px-6 py-3">Status</th>
                          <th scope="col" className="px-6 py-3">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4">#1234</td>
                          <td className="px-6 py-4">Pothole</td>
                          <td className="px-6 py-4">Main St & 5th Ave</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">Resolved</span>
                          </td>
                          <td className="px-6 py-4">2023-08-15</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4">#1235</td>
                          <td className="px-6 py-4">Broken Streetlight</td>
                          <td className="px-6 py-4">Park Ave & 10th St</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold text-yellow-800 bg-yellow-100 rounded-full">In Progress</span>
                          </td>
                          <td className="px-6 py-4">2023-08-20</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4">#1236</td>
                          <td className="px-6 py-4">Graffiti</td>
                          <td className="px-6 py-4">Community Center</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 text-xs font-semibold text-red-800 bg-red-100 rounded-full">Pending</span>
                          </td>
                          <td className="px-6 py-4">2023-08-25</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline">View All Reports</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Community events in your area</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <h4 className="font-medium text-gray-900">Community Cleanup</h4>
                      <p className="text-sm text-gray-500 mt-1">Sep 15, 2023 • 9:00 AM</p>
                      <p className="text-sm text-gray-600 mt-2">Join us for a community cleanup event at Central Park.</p>
                    </div>
                    <div className="border-b pb-4">
                      <h4 className="font-medium text-gray-900">Town Hall Meeting</h4>
                      <p className="text-sm text-gray-500 mt-1">Sep 20, 2023 • 6:00 PM</p>
                      <p className="text-sm text-gray-600 mt-2">Discuss upcoming infrastructure projects with city officials.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Farmers Market</h4>
                      <p className="text-sm text-gray-500 mt-1">Sep 25, 2023 • 8:00 AM</p>
                      <p className="text-sm text-gray-600 mt-2">Local farmers market at the community center parking lot.</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline">View All Events</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}