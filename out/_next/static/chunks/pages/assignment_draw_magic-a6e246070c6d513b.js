(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{4626:function(e,n,t){"use strict";t.r(n);var i=t(5893);function r(e){var n=Object.assign({h1:"h1",h2:"h2",ol:"ol",li:"li",p:"p",a:"a",h3:"h3",strong:"strong"},e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Assignment - Edge and Corner Detectors"}),"\n",(0,i.jsx)(n.h1,{children:"22nd December 2022 - 23:59"}),"\n",(0,i.jsx)(n.h2,{children:"Updates"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Page opened 8th December 2022"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"The goal of this assignment is to develop a magic trick that can be performed\nvia the Internet."}),"\n",(0,i.jsxs)(n.p,{children:["A user draws one of the ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Zener_cards",children:"Zener symbols"}),"\non a notepad. The Zener symbols include circle, plus, wave, square, and star."]}),"\n",(0,i.jsx)(n.p,{children:"The computer correctly predicts the drawn symbol and then verifies it\nby having the user show the drawn symbol to the screen."}),"\n",(0,i.jsx)(n.p,{children:"A video showing the magic trick is shown below."}),"\n",(0,i.jsx)(n.h2,{children:"Methodology"}),"\n",(0,i.jsx)(n.p,{children:"The assignment can be broken down into three main parts:\ntraining data, pose estimation, optical flow, classification, and revelation."}),"\n",(0,i.jsx)(n.h3,{children:"Training Data"}),"\n",(0,i.jsx)(n.p,{children:"First record at least 5 subjects drawing the various Zener symbols. Your videos\nshould look similar to the ones below."}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("table",{children:(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("iframe",{width:"400",height:"300",src:"https://www.youtube.com/embed/J6isfzqS5ig",title:"Drawing Zener Symbols",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),(0,i.jsx)("td",{children:(0,i.jsx)("iframe",{width:"400",height:"300",src:"https://www.youtube.com/embed/T3ZAjiuGfXg",title:"Drawing Zener Symbols (Sun)",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})})]})})})}),"\n",(0,i.jsx)(n.h3,{children:"Pose Estimation"}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"https://google.github.io/mediapipe/",children:"Mediapipe"}),", ",(0,i.jsx)(n.a,{href:"https://www.tensorflow.org/lite/examples/pose_estimation/overview",children:"Movenet"}),",\nor ",(0,i.jsx)(n.a,{href:"https://github.com/tensorflow/tfjs-models/tree/master/pose-detection",children:"Pose Detection"}),"\nto find the position of the head and shoulders of the user."]}),"\n",(0,i.jsx)(n.h3,{children:"Extract optical flow or other movement of feature points"}),"\n",(0,i.jsx)(n.p,{children:"Implement a routine that can extract the optical flow from these regions of interest\nfrom a video sequence of the user drawing one of the symbols."}),"\n",(0,i.jsx)(n.p,{children:"Note that in addition to the optical flow, the timing may also be an important\nindicator of what the user has drawn."}),"\n",(0,i.jsx)(n.h3,{children:"Classifier"}),"\n",(0,i.jsx)(n.p,{children:"Convert the information from the optical flow into a tensor (multi-dimensional feature vector),\nthat can be used to train a support vector machine (SVM) or neural network\nto distinguish between the different symbols."}),"\n",(0,i.jsx)(n.h3,{children:"Revelation"}),"\n",(0,i.jsx)(n.p,{children:"After the computer has made its prediction, the user will reveal what they have\ndrawn by holding it in front of the camera."}),"\n",(0,i.jsx)(n.h2,{children:"OpenCV"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"http://opencv.org",children:"OpenCV"})," library is a powerful computer vision library\nwith language bindings for python, java, javascript, and C++.\nThe library includes many high performance implementation of simple\nand advanced vision algorithms.\nYou can use this library when implementing a solution to This\nassignment."]}),"\n",(0,i.jsx)(n.h2,{children:"Machine Learning"}),"\n",(0,i.jsxs)(n.p,{children:["There are many libraries that are popular for machine learning:\n",(0,i.jsx)(n.a,{href:"https://scikit-learn.org/stable/",children:"scikit-learn"}),",\n",(0,i.jsx)(n.a,{href:"https://pytorch.org",children:"PyTorch"}),",\n",(0,i.jsx)(n.a,{href:"https://www.tensorflow.org",children:"TensorFlow"}),",\nand ",(0,i.jsx)(n.a,{href:"https://keras.io",children:"Keras"}),".\nYou can pick one of those or any similar library for your project."]}),"\n",(0,i.jsx)(n.h2,{children:"Hint"}),"\n",(0,i.jsx)(n.p,{children:"Magicians know for centuries that most people will choose the star (followed by the wave)\nwhen asked to select a random Zener symbol. So if your algorithm is unsure, you could\nalways guess star."}),"\n",(0,i.jsx)(n.h2,{children:"Honesty declaration"}),"\n",(0,i.jsx)(n.p,{children:"By submitting an assignment, you claim that your submission is only your own work.\nThis means that you have developed the design, implemented the code, run the experiments,\nand all other work necessary to complete the assignment by yourself."}),"\n",(0,i.jsxs)(n.p,{children:["If you discussed your work with other students or used sources on the Internet, then you ",(0,i.jsx)(n.strong,{children:"must"}),"\nsay so clearly at the beginning of the assignment."]}),"\n",(0,i.jsx)(n.p,{children:"You can discuss parts of the assignment with others, but these discussions must be limited\nto sharing ideas on a whiteboard or notepad. If you exchange code/programs/designs or\nexchange any material via the Internet, then you must say so in your honesty declaration."}),"\n",(0,i.jsxs)(n.p,{children:["Fill out the ",(0,i.jsx)(n.a,{href:"https://docs.google.com/document/d/1Z9FyOFt--OL_cqse55b-CifBgPDfFZi2L6-sUQBvZ4I/edit?usp=sharing",children:"Honesty Declaration"}),"\nand add any external sources that you used during the assignment."]}),"\n",(0,i.jsx)(n.h2,{children:"Submissions"}),"\n",(0,i.jsx)(n.p,{children:"This assignment must be done individually."}),"\n",(0,i.jsx)(n.p,{children:"If you use information or code that is not your own (e.g., sample code from the Internet,\nideas for new features from a classmate, etc.), then you must specify this in your assignment\nwrite-up. Failure to disclose that you used external sources will lead to disciplinary actions."}),"\n",(0,i.jsx)(n.p,{children:"To hand in your assignment:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a directory to hold all of your data. The directory name should be <student id>_a<number>,\nwhere <student id> is your student id and <number> is the number of the assignment,"}),"\n",(0,i.jsx)(n.li,{children:"Create a directory source inside of the directory <student id>_a<number>."}),"\n",(0,i.jsx)(n.li,{children:"Put the source code, which may contain of multiple files, for your assignment’s solution\ninto the directory source."}),"\n",(0,i.jsx)(n.li,{children:"Your prg\\ram must compile by just running the command make in the source directory or a\nsimilar step for your programming language of choice."}),"\n",(0,i.jsx)(n.li,{children:"Write a README file to explain anything you feel is necessary or important about your\nsubmission. This may include special features/bugs of your program. Describe what parts\nof the assignment you implemented. It is in your interest to simplify the job of the marker."}),"\n"]})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(e.components||{}).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(r,e)})):r(e)}},7324:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/assignment_draw_magic",function(){return t(4626)}])}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7324)}),_N_E=e.O()}]);