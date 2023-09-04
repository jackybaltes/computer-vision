(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{2915:function(e,n,t){"use strict";t.r(n);var i=t(5893);function o(e){var n=Object.assign({h1:"h1",h2:"h2",ol:"ol",li:"li",p:"p",img:"img",a:"a",strong:"strong"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Assignment - Edge and Corner Detectors"}),"\n",(0,i.jsx)(n.h1,{children:"15th November 2022 - 23:59"}),"\n",(0,i.jsx)(n.h2,{children:"Updates"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Page opened 28th Oktober 2022"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"The goal of this assignment is to develop a simple approach for\nestimation of the motion of a robot, so-called ego motion\nestimation."}),"\n",(0,i.jsx)(n.p,{children:"Ego-motion estimation includes visual compass and visual odometry."}),"\n",(0,i.jsx)(n.p,{children:"The video below shows a video from our humanoid robot Robinion\nwalking down a hallway in front of our lab."}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("iframe",{width:"640",height:"360",src:"https://www.youtube.com/embed/VHN9vbRzmNU",title:"Robinion - Hallway 90",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,i.jsx)(n.p,{children:"You can use this video or create a similar video for your own robot\nproject."}),"\n",(0,i.jsx)(n.h2,{children:"Methodology"}),"\n",(0,i.jsx)(n.p,{children:"Our goal is to develop an efficient and simple algorithm for\nestimating the angular and linear velocities of a moving robot."}),"\n",(0,i.jsx)(n.p,{children:"The idea is that instead of assuming a 3D world scene, we assume that the\npicture captured by the camera is created by a virtual image plane\nthat is parallel to the camera. This assumption is valid if the distance\nof most objects to the camera is similar or objects are far away from the\ncamera. Therefore, the robot looks at the horizon instead of the floor in front of it."}),"\n",(0,i.jsx)(n.p,{children:"In effect, we assume that our camera is looking at a large image of\nthe world. We track the position of feature points in the image to estimate rotations\n(by detecting the rotation of edges in the image), and linear velocities\n(by checking the increase in scale of the feature points)."}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"./camera_view.svg",alt:"cam"})})}),"\n",(0,i.jsx)(n.h2,{children:"Image Stabilization"}),"\n",(0,i.jsx)(n.p,{children:"First, we implement a system to stabilize the image and reduce\nmotion blur for further processing."}),"\n",(0,i.jsx)(n.p,{children:"Apply an edge detector and/or corner detector to extract areas that\ncan be localized accuractely either in one or two dimensions."}),"\n",(0,i.jsx)(n.p,{children:"Apply a filter to the edge/corner image to remove the motion blur\nin the image."}),"\n",(0,i.jsx)(n.h2,{children:"Visual compass"}),"\n",(0,i.jsx)(n.p,{children:"Extend your approach to include an estimate of the current orientation\nof the robot."}),"\n",(0,i.jsx)(n.p,{children:"The shift in orientation can be estimated by calculating the\ncross correlation of the edge/corner image."}),"\n",(0,i.jsx)(n.h2,{children:"Visual Odometry"}),"\n",(0,i.jsx)(n.p,{children:"Extend your approach to compute an estimate of the linear motion of\nthe robot."}),"\n",(0,i.jsx)(n.p,{children:"Points that do not lie in the center in the image will move\ntowards the edges. The exact movement depends on the\nmotion of the robot as well as the 3D coordinates of the point."}),"\n",(0,i.jsx)(n.p,{children:"Hence the edge image will be scaled by forward motion."}),"\n",(0,i.jsx)(n.h2,{children:"OpenCV"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"http://opencv.org",children:"OpenCV"})," library is a powerful computer vision library\nwith language bindings for python, java, javascript, and C++.\nThe library includes many high performance implementation of simple\nand advanced vision algorithms.\nYou can use this library when implementing a solution to This\nassignment."]}),"\n",(0,i.jsx)(n.h2,{children:"Honesty declaration"}),"\n",(0,i.jsx)(n.p,{children:"By submitting an assignment, you claim that your submission is only your own work.\nThis means that you have developed the design, implemented the code, run the experiments,\nand all other work necessary to complete the assignment by yourself."}),"\n",(0,i.jsxs)(n.p,{children:["If you discussed your work with other students or used sources on the Internet, then you ",(0,i.jsx)(n.strong,{children:"must"}),"\nsay so clearly at the beginning of the assignment."]}),"\n",(0,i.jsx)(n.p,{children:"You can discuss parts of the assignment with others, but these discussions must be limited\nto sharing ideas on a whiteboard or notepad. If you exchange code/programs/designs or\nexchange any material via the Internet, then you must say so in your honesty declaration."}),"\n",(0,i.jsxs)(n.p,{children:["Fill out the ",(0,i.jsx)(n.a,{href:"https://docs.google.com/document/d/1Z9FyOFt--OL_cqse55b-CifBgPDfFZi2L6-sUQBvZ4I/edit?usp=sharing",children:"Honesty Declaration"}),"\nand add any external sources that you used during the assignment."]}),"\n",(0,i.jsx)(n.h2,{children:"Submissions"}),"\n",(0,i.jsx)(n.p,{children:"This assignment must be done individually."}),"\n",(0,i.jsx)(n.p,{children:"If you use information or code that is not your own (e.g., sample code from the Internet,\nideas for new features from a classmate, etc.), then you must specify this in your assignment\nwrite-up. Failure to disclose that you used external sources will lead to disciplinary actions."}),"\n",(0,i.jsx)(n.p,{children:"To hand in your assignment:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a directory to hold all of your data. The directory name should be <student id>_a<number>,\nwhere <student id> is your student id and <number> is the number of the assignment,"}),"\n",(0,i.jsx)(n.li,{children:"Create a directory source inside of the directory <student id>_a<number>."}),"\n",(0,i.jsx)(n.li,{children:"Put the source code, which may contain of multiple files, for your assignment’s solution\ninto the directory source."}),"\n",(0,i.jsx)(n.li,{children:"Your prg\\ram must compile by just running the command make in the source directory or a\nsimilar step for your programming language of choice."}),"\n",(0,i.jsx)(n.li,{children:"Write a README file to explain anything you feel is necessary or important about your\nsubmission. This may include special features/bugs of your program. Describe what parts\nof the assignment you implemented. It is in your interest to simplify the job of the marker."}),"\n"]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(e.components||{}).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}},9235:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/assignment_edge_and_corner_detectors",function(){return t(2915)}])}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9235)}),_N_E=e.O()}]);