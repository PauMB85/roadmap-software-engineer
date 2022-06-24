# Introducing the Function Component

The main intention was that 'stateless pure function components' give us more opportunity to make performance optimizations.

A function componente without state is designed to take the following form:

![alt text](./imgs/01_c/Captura%20de%20pantalla%202022-06-24%20a%20las%2013.19.12.png "a title")

## Function props

The job of a prop is to pass a value to the function, each prop is a property of an object, it can be a string, number, an object,
a function or anything that can be assigned using a JS expression...

## Children prop

All the props of a function component should be defined explicity, but there's a prop woth knowing early on that isn't apparent to follow this rule. This is called a _children prop_.

## Parent and child

In React, props are the mechanism for components talking to one another. We can generalize this idea by using two components normally involved in the communication to a parent and a child.

Once a piece of info gets a component, the prop binds its value to a local scope variable. It can be used pretty flexibly with one limitation, but It's not expected to be changed! If the value is changed it not be reflected in the parent component. The information passing is a one-way direction. If you wnat to send information back, you need to use a callback to pass informatio to the parent component.

In resum, in a typical parent / child relationship in React, it's recommended that a prop value should not be changed by the child. Instead, it should done through a function prop.


