import React from 'react'

function Footer() {
  return (
    <>
            <footer class=" w-full py-10 px-3 text-white bg-[#9EC8B9]">
        <div class="flex -mx-3">
            <div class="flex-1 px-3">
                <h2 class="text-lg font-semibold">About Us</h2>
                <p class="mt-5">Helping students to prepare to their final projects. <br />
                Waiting time for approval is faster. <br />
                Students can present previously implemented ideas.
                </p>
            </div>
            <div class="flex-1 px-3">
                <h2 class="text-lg font-semibold">Important Links</h2>
                <ul class="mt-4 leading-loose">
                    <li><a href="https://codebushi.com">Terms &amp; Conditions</a></li>
                    <li><a href="https://codebushi.com">Privacy Policy</a></li>
                </ul>
            </div>
            
        </div>
    </footer>
    </>
  )
}

export default Footer