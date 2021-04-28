/** Create timer */
'use strict';

import Timer from './timer.js';

const timer1 = new Timer({ selector: '.timer-1' });
timer1.start();
timer1.start();

const timer2 = new Timer({ selector: '.timer-2' });
