# Spot.xyz Takehome Challenges

## Overview

This project is my solution for the Spot.xyz takehome project

## Notes on solution

Although my shader looks close to the given shader image, I believe that I have not fully met the requirements expected and there are many improvements that can be made. Some of these improvements include:

- Making sure the shader shares the same light as the scene light
- Correcting the overlap darkness of the corners of the shader
- Reworkign the shader to strictly use the customMaterial with imported fragment.fx and vertex.fx files
- Reworking the shader to determine the edge distance falloff instead of a hard-coded gradient
- Optimize the shader by establishing more constants and shared variables
- Utilizing the mesh UV to determine the edge distance above
- Expanding on the unused 'extraMaterial' that was prototyped to share the camera position and direction so that it may look like the designed implementation found at https://nme.babylonjs.com/#054HJ2#2
- Accounting for multiple lights by looping through and applying shading based on their characteristics
