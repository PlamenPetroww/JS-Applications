# JS-Applications

![Applications](https://user-images.githubusercontent.com/108054083/230743007-c1f7469f-a13d-4b38-b994-7d7887a8c145.jpg)

Im Projektverzeichnis können Sie Folgendes ausführen:

npm start - Führt die App im Entwicklungsmodus aus.
Öffnen Sie http://localhost:3000, um es im Browser anzuzeigen.
Die Seite wird neu geladen, wenn Sie Änderungen vornehmen.

npm test - Startet den Testläufer.

Exercices and Exams - SoftUni University

Im JS-Anwendungskurs lernen die Teilnehmer, was HTTP-Anforderungen sind und wie sie verwendet werden. Sie erfahren etwas über REST Services, was ein Baas (Backend as a Service) ist und wie man damit arbeitet, was asynchroner Code bedeutet (Promises, Verwendung von async/await), was Templating und Routing sind. Während des Kurses werden sie eine Single Page Application erstellen, indem sie die in früheren Vorlesungen erlernten Techniken anwenden, anhand derer sie bewertet werden. Sie verstehen, was die Architektur einer Anwendung ist und wie sie ihre Anwendungen richtig strukturieren. Am Ende des Kurses werden sie sich mit verschiedenen Entwurfsmustern und ihren praktischen Richtlinien befassen, ihre eigenen Webkomponenten mithilfe des Webkomponentenstandards erstellen und eine Webback-Umgebung von Grund auf neu erstellen.

Beispiel Prüfungsaufgabe:

Navigation links should correctly change the current page (view). GamesPlay link should redirect to the Home page. Guests (un-authenticated visitors) can see the links to the All Games (Catalogue) page, as well as the links to the Login and Register pages. The logged-in user navbar should contain the links to All Games (Catalogue) page, the Create page and a link for e Logout action.All users should be greeted from the homepage, where they should be able to see the three most recently added games. Clicking on the details links leads to the details page for the selected game. 

![Screenshot (44)](https://user-images.githubusercontent.com/108054083/230744229-9971740c-1235-4ff3-bd8c-147d379afb0b.png)

The Register page contains a form for new user registration. By providing an email and password, the app should register a new user in the system if there are no empty fields.

![Screenshot (46)](https://user-images.githubusercontent.com/108054083/230744231-11d0c259-c0a3-45f1-9912-42db80056cb9.png)

The Login page contains a form for existing user authentication. By providing an email and password, the app should login a user in the system if there are no empty fields.

![Screenshot (45)](https://user-images.githubusercontent.com/108054083/230744230-04b789fc-2e54-42ae-be73-d13ed899db3d.png)


The Create page is available to logged-in users. It contains a form for creating new games. Check if all the fields are filled before you send the request.

![Screenshot (51)](https://user-images.githubusercontent.com/108054083/230744228-666c777d-bfca-4a6c-8aeb-9a979d7419c9.png)


All users should be able to view details about games. Clicking the Details link in of a game should display the Details page:
If the currently logged in user is the creator of the game, the Edit and Delete buttons should be displayed, otherwise they should not be available.

![Screenshot (48)](https://user-images.githubusercontent.com/108054083/230744233-cb358b1a-2c57-41dd-a6ca-e895c2271396.png)


The Edit page is accessible to logged-in users and allows the author to edit their own games. Clicking the Edit a specific game link on the details page should display the Edit page. It contains a form with input fields for all relevant properties. Make sure all fields are filled in before submitting the request. The fields must be filled in when the page is first loaded.

![Screenshot (49)](https://user-images.githubusercontent.com/108054083/230744234-45c39748-c94b-4a2d-9e15-ea3a3b84a540.png)

The delete action is available to logged-in users, for game they have created. When the author clicks on the Delete action on any of their games, a confirmation dialog should be displayed, and upon confirming this dialog, the game should be deleted from the system.

![Screenshot (50)](https://user-images.githubusercontent.com/108054083/230744235-2668d7e4-ec4f-4468-a4c9-a6fef0a6c1f5.png)









