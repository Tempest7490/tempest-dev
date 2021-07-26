import React, { Component } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import SlimeBG from '../../components/Slime-BG.jsx';
import Navbar from '../../components/Navbar.jsx';

const Container = styled.div`
  & {
    display: grid;
    margin-left: 15vw;
    margin-top: 20vh;
    font-size: 40px;
  }

  & h1 {
    font-size: 70px;
    font-weight: 100;
    text-transform: uppercase;
  }
`

export default function haiirOS() {
	return (
		<>
			<Head>
				<title> HaiirOS </title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="apple-touch-icon" sizes="180x180" href="static/favicons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="static/favicons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="static/favicons/favicon-16x16.png" />
				<link rel="manifest" href="static/favicons/site.webmanifest" />
				<link rel="mask-icon" href="static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff"></meta>

				<link href="https://fonts.googleapis.com/css?family=Rubik|Fira+Sans|Open+Sans|Noto+Sans|Oxygen|Nunito|Roboto&display=swap" rel="stylesheet" />
			</Head>

			<Navbar />
			<SlimeBG />
			<Container>
				<h1> HaiirOS </h1>
				Kernel Project written in C.<br />
				Main purpose is to learn C, Assambly-x86 and how Kernels work.
				<p>
					Main resources used are <a href="wiki.osdev.org">OS-dev</a> and some pages
					from Wikipedia<br/> for more theory about some topics.
				</p>
			</Container>
		</>
	);
}
