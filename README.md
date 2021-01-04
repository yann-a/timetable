# distant-timetable

A simple set of HTML/CSS/Javascript ot create a timetable with
links to online ressources.

## How to

Everything is done in data.js. There are two object you need to update :
* timetable has two fields :
	* days contains the ... days
	* hours contains the name of the hour intervals
* courses has the names of the courses as keys, and each entry contains :
	* classes an object that has the name of the classes (for instance lab session / lecture) and points to an object containing :
		* hour the index of the hour interval (starting at 1), i.e its position in `timetable.hours`
		* day the index of the day (starting at 1)
		* room (optional) the name of the room
	* color (optional) a valid HTML color (as string)
	* links (optional) an array of objects, each object being composed of :
		* url : the url
		* name : the name of the link
	* infos (optional) : a (optionally HTML-formatted) string to be printed before the links in the modal

Additionally, one can also provide each class with a links array as previously

## Example

an example of timetable is already provided in data.js
