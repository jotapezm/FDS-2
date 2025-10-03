# 📊 Evals Project

[![tests](https://github.com/emcf/evals_project/actions/workflows/tests.yml/badge.svg)](https://github.com/emcf/evals_project/actions/workflows/tests.yml)

![Evals Project](https://jqipgvrtjkzqzbppfypa.supabase.co/storage/v1/object/public/cdn/assets/home.png)

This is a [Next.js](https://nextjs.org) web app for collaborative evaluation within an organization. It allows admins to create evaluation forms (evals) that users can fill out to evaluate themselves and their peers. The app provides a dashboard for both admins and users to view and analyze results.

## Description

- Web app where admins can create new evals (an eval is a form containing a set of questions that users fill out, each question has a response in the form of a rating from 1 to 5)
- Users must take these evals, and they must also evaluate other peers
- Admins can view the results of all evals

### Evals dashboard (Admin-only)

- Admins can view results of all evals
- Admins can make a new eval from scratch
  - Admin punches in the description
  - Admin punches in what the questions are
  - Admin can set the due date for when users have to fill out the eval
- Click on a new eval -> takes you to eval dashboard
  - % of people who have taken it already
  - View list of users
    - Click on any one of the users to view their results
    - Full dashboard of results (both self-eval and peer-eval) for that user, complete with charts

![Evals Project](https://jqipgvrtjkzqzbppfypa.supabase.co/storage/v1/object/public/cdn/assets/eval_dashboard.png)

![Evals Project](https://jqipgvrtjkzqzbppfypa.supabase.co/storage/v1/object/public/cdn/assets/new_eval.png)

### My Evals page

- Users can view the evals they have not taken yet where deadline has not passed
  - Users can click on any evals they have not taken yet and fill it out
  - Evals can require the user to full out a self-eval plus any number of manager, peer, or subordinate evals

![Evals Project](https://jqipgvrtjkzqzbppfypa.supabase.co/storage/v1/object/public/cdn/assets/my_evals.png)

![Evals Project](https://jqipgvrtjkzqzbppfypa.supabase.co/storage/v1/object/public/cdn/assets/eval.png)

![Eval Project](https://jqipgvrtjkzqzbppfypa.supabase.co/storage/v1/object/public/cdn/assets/eval_complete.png)

### Manage Users Page (Admin-only)

![Evals Project](https://jqipgvrtjkzqzbppfypa.supabase.co/storage/v1/object/public/cdn/assets/manage_users.png)

### Analyze Evals Page (Admin-only)

- Admins can view the results of all evals, for each target user, by each evaluator user.
- This allows a comprehensive 360-degree view of the eval results.

![Evals Project](https://jqipgvrtjkzqzbppfypa.supabase.co/storage/v1/object/public/cdn/assets/eval_analysis.png)

## Getting Started

Ensure you have node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

First, navigate to the main project folder `eval_project` and install the required dependencies:

```bash
npm install
```

Then, create a new database:

```bash
npx prisma db push
```

This command will create a new SQLite database file in the `prisma` folder.
Lastly, start the development server in the terminal by running

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Note that after signing in, youi'll have to navigate to the Evals page to create your new account in the database. In a real production app, this will be done automatically via webhook after signing in.

By default, everyone is an Admin (for testing purposes). You can change this by modifying the `isAdmin` field in the database to default to `false` for new users. Then, you can manually set a given user's `isAdmin` field to `true` with the make_user_admin.py Python script in the `scripts` folder.

## TODO / Roadmap

- [x] Make new "Set user as admin" page (admin-only)
- [x] Make new "Add users and define relationships" page (admin-only)
  - (admin-only) Button to download excel template
    - Template is an empty CSV with column names:
      - `Employee Email (required)`
      - `Employee Name (optional)`
      - `Managers Emails (optional)`
      - `Peers Emails (optional)`
      - `Subordinates Emails (optional)`
      - `Company (optional)`
      - `Job Title (optional)`
      - `Area (optional)`
  - [x] (admin-only) Button to upload excel file
    - Once uploaded, send invitation links to users' emails (see: https://clerk.com/docs/users/invitations)
    - Once invitation is accepted, add user to the database and set their data accordingly
- [x] Update "Create new eval" page
  - (admin-only) Add new checkboxes for creating new evals
    - Checkbox options are: Evaluate self, managers, peers, and subordinates
- Feature to send out notification emails to users when evals are created
- Feature to send out reminder emails to users when evals are due
- Update "View eval" page to export as a downloadable CSV or PDF file
- Update "Create new eval" page to have reusable question sets (templates)
- Create designs for all pages
- Create 7 emails
