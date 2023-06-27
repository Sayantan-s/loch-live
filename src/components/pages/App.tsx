import { LeftContent, RightContent } from '@components/views/app'
import './app.css'
/*
1. The testimonials at the bottom should move when clicked and dragged.
2. The notification settings on the top of the page should auto-rotate on an infinite
carousel.
3. The textbox on the right should be responsive on hover and click.
4. Check if the email added is a legitimate email or not. Ie does it contain “@” and “.”
Otherwise spit out a “Please enter a valid email” message.
5. When the user submits their email, they should be redirected to
https://app.loch.one/welcome.
6. The webpage should be autofitted and compatible with all screen sizes and
browsers.
7. You must use react to build the application.
*/

function App() {
  return (
    <main className="app">
      <LeftContent />
      <RightContent />
    </main>
  )
}

export default App
