'use strict';
/**
 * Create Maze game
 * Game starts when mouse croosses green line
 * Game ends when mouse croosses light green field
 * User wins when mouse croosses light red line
 */

const refs = {
  start: document.querySelector('.start'),
  finish: document.querySelector('.finish'),
  indicator: document.querySelector('#indicator'),
  maze: document.querySelector('#maze'),
  time: document.querySelector('#time'),
};

let isPlaying = false;

function handleMazeStart(e) {
  if (!isPlaying) {
    isPlaying = true;
    refs.indicator.textContent = 'Play';
    startTimer();
    console.log('handleMazeStart');
  }
}

refs.start.addEventListener('mouseover', handleMazeStart);

function handleMazeEnter(e) {
  if (isPlaying && e.target.classList.contains('block')) {
    isPlaying = false;
    refs.indicator.textContent = 'You loose';
    stopTimer();
    console.log('handleMazeEnter');
  }
}

refs.maze.addEventListener('mouseover', handleMazeEnter);

function handleMazeLeave(e) {
  if (isPlaying) {
    refs.indicator.textContent = 'Pause';
    isPlaying = false;
    stopTimer();
    console.log('handleMazeLeave');
  }
}

refs.maze.addEventListener('mouseleave', handleMazeLeave);

function handleMazeFinish(e) {
  if (isPlaying) {
    refs.indicator.textContent = 'You Win';
    isPlaying = false;
    stopTimer();
    console.log('handleMazeFinish');
  }
}

refs.finish.addEventListener('mouseover', handleMazeFinish);

let timer;

function startTimer() {
  refs.time.textContent = '0';
  timer = setInterval(() => {
    refs.time.textContent = parseInt(refs.time.textContent) + 1;
  }, 1000);
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}
