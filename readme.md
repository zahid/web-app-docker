This is a guide on setting up a local development environment using docker for a project. We're going to use a web application as a case study.

![](http://images.clipartpanda.com/whale-clipart-Whale-2015080554.png)

So you've just inherited a piece of software and now you have to maintain and extend it - but there is no instructions on contributing to the software.

You have inherited a software system that does not have a local development environment, or you just need to make one for a new project of your own. [TODO make this sound better]

The goal is to have a virtual environment in which you can contribute to a software thing. You'd want a virtual environment so that ... [TODO why virtualize? what's the point? 1 - 2 sentences].


We're going to use the classic web application pattern as a case for this. This will serve as an education piece, _a lot_ of software systems are built as web applications. To create a local development environment which holds all of our dependencies and has everything to make this run, we're going to wrap each of these components into docker containers.

There are several major components - a **webserver**, which sits in front of a **client web app**, and an **API server** connected to a **database**.

![http://i.imgur.com/DWq6s1r.png](http://i.imgur.com/DWq6s1r.png)

Going further:

- Need to run this on multiple operating systems? Just run these inside of a  [Vagrant](https://www.vagrantup.com/) virtual machine.
- Need to put this on a server? ...?

Resources:

- [Imgur post with images](http://imgur.com/a/uQwxf)