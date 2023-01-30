import React from 'react';
import './App.css';

import Stack from './Components/Stack/Stack';
import Box from './Components/Box/Box';
import Center from './Components/Center/Center';
import Switcher from './Components/Switcher/Switcher';
import Cluster from './Components/Cluster/Cluster';
import Sidebar from './Components/Sidebar/Sidebar';
import Cover from './Components/Cover/Cover';
import Grid from './Components/Grid/Grid';

function App() {
  return (
    <main>
      <nav style={{padding: "0 var(--s2)"}}>
        <Box>
          <Cluster align='center' justify='space-between'>
            <h2>Articulate</h2>
            <p>Features</p>
            <p>Customers</p>
            <p>Pricing</p>
            <p>Teams</p>
            <p>Resources</p>
            <button>Free Trial</button>
          </Cluster>
        </Box>
          <Cluster align='center' justify='space-around'>
            <p>Overview</p>
            <p>Rise 360</p>
            <p>Content Library 360</p>
            <p>Review 360</p>
            <p>Storyline 360</p>
          </Cluster>
      </nav>

      <section>
        <Box padding='0'>
          <Switcher>
            <Cover minHeight='100%' centeredIndex={0}>
              <Center>
                <h1>Articulate 360</h1>
                <h5>The industry-leading creator platform for workplace learning</h5>
              </Center>
            </Cover>
            <Cover minHeight='900px' centeredIndex={0}>
              <Box style={{height: "100%"}}>
                <Stack splitAfter={5}>
                  <h2>Start Free Trial</h2>
                  <Stack>
                    <label>Name</label>
                    <input />
                  </Stack>
                  <Stack>
                    <label>Email</label>
                    <input />
                  </Stack>
                  <Stack>
                    <label>Org</label>
                    <input />
                  </Stack>
                  <Stack>
                    <label>Etc</label>
                    <input />
                  </Stack>
                  <button style={{margin: "10px"}}>Activate Trial</button>
                </Stack>
              </Box>
            </Cover>
          </Switcher>
        </Box>
      </section>

      <section>
        <Box>
          <Cover minHeight='0' padding='10rem 0'>
            <div>
              <Center>
                <h1>What's included with Articulate 360</h1>
                <h5>All the creator tools and resources you need, continuously updated with new features. It includes:</h5>
              </Center>

              <Grid minWidth='400px' space='0px' style={{textAlign: "center"}}>
                <Box>
                  <h4>Award‑Winning Creator Tools</h4>
                </Box>
                <Box>
                  <h4>9+ Million Stock Assets & Course Templates</h4>
                </Box>
                <Box>
                  <h4>Project Review App</h4>
                </Box>
                <Box>
                  <h4>Live and On-Demand Online Training</h4>
                </Box>
              </Grid>
            </div>
          </Cover>
        </Box>
      </section>

      <Cover minHeight='0' fullWidth={true}>
        <Sidebar side="right" contentMin='40%'>
          <img src="https://articulate.com/packs/images/devices/device-laptop-c09493f6a2460295133e3c0db1575d21.webp" alt="" style={{maxWidth: "100%"}}/>
          <Stack style={{maxWidth: "900px"}}>
            <img src="https://articulate.com/packs/images/illustrations/illustration-rocketman-a7dbfa9132d085a080262df170c95329.webp" alt="" style={{maxWidth: "100%"}} />
            <h2>Online stakeholder reviews</h2>
            <h6>Get approval on courses easier and faster.</h6>
            <p>Speed project reviews by allowing stakeholders to view courses and provide feedback in a web browser—no app download required.</p>
          </Stack>
        </Sidebar>
      </Cover>

      <Cover minHeight='0' padding='10rem 5rem'>
        <Center style={{maxWidth: "600px"}}>
          <h1>Ready to start your free Articulate 360 trial?</h1>
          <p>Articulate 360 is all you need to source assets, author multi-device courses, collaborate with stakeholders, and grow your e-learning skills. Try free for 30 days, no credit card required.</p>
          <br />
          <label>Email</label>
          <input type="email" />
          <br />
          <button>Get Started</button>
        </Center>
      </Cover>

    </main>
  );
}

export default App;
