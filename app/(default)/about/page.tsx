import Badge from "@/components/Badge";

export const metadata = {
  title: 'Sign In - Open PRO',
  description: 'Page description',
}


import '../../css/App.css'
import Link from 'next/link'

// Sample data array
const timelineEvents: TimelineEvent[] = [


  {
    id: 3,
    date: 'Nov 2023',
    title: 'Attend iGEM Competition',
    description: 'Description of the event...',
  },
  {
    id: 2,
    date: 'June 2023',
    title: 'Start iGEM project SEPIA',
    description: 'Description of the event...',
  },
      {
    id: 1,
    date: 'Apr 2023',
    title: 'Munich Bioinformatics Student Lab Founded',
    description: 'Description of the event...',
  },
];

export default function About() {
  return (
      <>
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">About Us</h1>
          </div>
        </div>
      </div>

    </section>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          {/* ... */}
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            {timelineEvents.map(event => (
              <div key={event.id} className="space-y-12 relative px-4 sm:space-y-8">
                <div className="flex flex-col sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] dark:before:bg-violet-400">
                  <h3 className="text-xl font-semibold">{event.title}</h3>
                  <time className="text-xs uppercase dark:text-gray-400">{event.date}</time>
                  <p className="mt-3">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
        <section>
          <div className= "App">
          <div className= "card-container">
          <Badge
            text = "New Post"
            filled = {true}
        />
          </div>
          </div>
        </section>
</>
  )
}
