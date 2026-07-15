import { useEffect } from 'react'
import Nav from '../components/story/Nav'
import Hero from '../components/story/Hero'
import Beans from '../components/story/Beans'
import Grind from '../components/story/Grind'
import Brew from '../components/story/Brew'
import Pour from '../components/story/Pour'
import Sip from '../components/story/Sip'
import ScrollGauge from '../components/story/ScrollGauge'
import './StoryPage.css'

export default function StoryPage() {
  useEffect(() => {
    document.title = 'Siwani Sinha — Full-Stack Engineer'
  }, [])

  return (
    <div className="story-page">
      <Nav />
      <ScrollGauge />
      <Hero />
      <Beans />
      <Grind />
      <Brew />
      <Pour />
      <Sip />
      <footer>
        <span className="copyright-icon">©</span> {new Date().getFullYear()} Built &amp; Designed by Siwani Sinha ·
        All rights reserved
      </footer>
    </div>
  )
}
