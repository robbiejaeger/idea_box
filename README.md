# README

## Purpose

IdeaBox is a project where the goal is to learn how build a single-page application where the user can follow standard CRUD actions without ever needed to refresh the page. On the root page (the only page), a user can create and store all of their ideas!

## Implementation

The back-end uses Rails, and the front-end uses JavaScript (with the jQuery library). In order to never need to refresh the page, AJAX is used on the front-end and communicates to the Rails API back-end.

## User Flow

IdeaBox is a container for all the ideas in your brain.

### Create and Idea

1. In the _Create a New Idea_ section, fill in the Title and Body of your idea.
2. Click **Save**.

### Edit an Idea

1. Click the title or body of an idea.
2. Edit the text.
3. Click outside of the edited idea to save your changes.

### Delete an Idea

To delete an idea, click **Delete Idea**.

### Search Ideas

You can search for an idea you previously saved. In the _Filter Ideas_ text box, type your search criteria.
