<template>
  <section id="contact" class="py-20">
    <div data-aos="zoom-out-up" class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">
        <span class="bg-[#0A97B0] bg-clip-text text-transparent">
          Get In Touch
        </span>
      </h2>
      <div
        class="max-w-3xl mx-auto bg-[#1e1e1e] rounded-2xl p-8 shadow-xl relative overflow-hidden"
      >
        <!-- <div class="absolute top-0 right-0 w-64 h-64 bg-transparent border border-[#4d4d4d] rounded-full  -z-0"></div> -->
        <div
          class="absolute pt-20 container h-[100%] rounded-2xl mx-auto px-4 inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-70"
        ></div>
        <div class="relative z-10">


            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-slate-300 mb-2"
                  >Your Name</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  v-model="name"
                  class="w-full bg-transparent border border-[#4d4d4d] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label for="email" class="block text-slate-300 mb-2"
                  >Your Email</label
                >
                <input
                v-model="email"
                  type="email"
                  name="email"
                  id="email"
                  required
                  class="w-full bg-transparent border border-[#4d4d4d] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
            <div>
              <label for="subject" class="block text-slate-300 mb-2"
                >Subject</label
              >
              <input
                type="text"
                name="subject"
                id="subject"
                v-model="subject"
                required
                class="w-full bg-transparent border border-[#4d4d4d] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label for="message" class="block text-slate-300 mb-2"
                >Your Message</label
              >
              <textarea
                name="message"
                id="message"
                rows="5"
                v-model="message"
                required
                class="w-full bg-transparent border border-[#4d4d4d] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>

            <!-- Hidden fields for additional features -->
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thank-you"
            />
            <input type="hidden" name="_captcha" value="false" />

            <button
              @click="sendMail()"
              class="w-full px-6 py-3 bg-[#0A5EB0] rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition"
            >
              Send Message
            </button>


          <div
            class="mt-8 flex flex-col md:flex-row md:items-center justify-between"
          >
            <div class="mb-4 md:mb-0">
              <p class="text-slate-300 mb-2">Or reach me directly:</p>
              <a
                href="mailto:your.email@example.com"
                class="text-[#0A5EB0] hover:text-cyan-300"
              >
                ghimirebishal050@gmail.com
              </a>
            </div>
            <div class="flex space-x-4">
              <a
                href="https://github.com/bishal-kcalb"
                class="text-slate-300 hover:text-white transition-colors"
              >
                <span class="sr-only">GitHub</span>
                <!-- GitHub Icon (SVG) -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0A5EB0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/bishal-kcalb/"
                class="text-slate-300 hover:text-white transition-colors"
              >
                <span class="sr-only">LinkedIn</span>
                <!-- LinkedIn Icon (SVG) -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0A5EB0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  ></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                class="text-slate-300 hover:text-white transition-colors"
              >
                <span class="sr-only">Twitter</span>
                <!-- Twitter Icon (SVG) -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0A5EB0"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";



const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')


const sendMail = async () => {
  const formData = {
    "name" : name.value,
    "email" : email.value,
    "subject" : subject.value,
    "message" : message.value
  }
  try{

    const data = await axios.post("https://mailsender-rho.vercel.app/send-email", formData);

    console.log(formData)
    console.log(data)
  }
  catch(e){
    console.log(e)
  }

};
</script>
