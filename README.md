# Selective-Undo Experiment
## shape_example
The code in shape_example is an implementation of a prototype webpage used in the tutorial located at https://www.youtube.com/watch?v=cu35F3KDWAc.
The tutorial is for my selective undo UI experiment, in which I aim to test the effectiveness of two new task-list mechanisms that I devised;
participants in the experiment must undo a mistake in the webpage by performing selective undo, and we are testing how well each of these types of task-lists
assist the users in finding the tasks that need to be undone. I need to first present an example webpage in which a generalized selective undo needs to 
be performed to fix the page. This webpage is not actually functional, because it is only meant for educating, and merely contains a mechanism-agnostic
task-list.
## demo
Subdirectory Italy_Scenario contains an implementation of a prototype webpage with a functioning task-list mechanism. This mechanism by default presents
an empty task-list, and gradually only presents certain categories of tasks as the user specifies them. Therefore, this mechanism provides "emphasis by
omission," i.e., it leaves out those tasks that the user deems irrelevant, or clutter. The second mechanism, not here implemented but attainable through
a minor adjustment in the code, always presents the entire task-list, i.e., all previously performed tasks are always present. However, selecting certain
categories of tasks indents all instances of those types of task, with the hypothesis that all non-indented tasks that remain will provide better context
to the user of which specific task instances in the list are relevant.
