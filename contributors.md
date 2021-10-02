# css-components contribution guidelines😬
Lets follow some :construction: tips to contribure to this repo!

1. Fork this repository to your profile. Clone the repo to view in your machine.
2. After cloning this repo, open the project folder in any _text-editor_. Here are few popular editors we wish you try : [Atom](https://atom.io/ ), [Sublime Text](https://www.sublimetext.com/), [vs-code](https://code.visualstudio.com/)
3. Keep up the folder structure.
4. Make your changes and commit to your repo.
5. Push to github to let the world know your work!
6. Submit your changes for review by creating a pull request to [TinkerHub-GCEK/Tinktober-CSS](https://github.com/TinkerHub-GCEK/Tinktober-CSS/pulls).

## Folder Structure
```
├───css
│   └───assets
├───favicon
├───images
├───js
└───pages

```
The **css** folder contains all the files for adding your `css` and the **pages** folder contains the `html` files for adding html code.

## Make necessary changes and commit those changes

Make changes based on what component you are adding. for example If you have a button component copy the below html code into button.html and add your component inside this html and write your css inside button.css file:

```html
<!--          (you can specify your name here)   -->
<div class="row">
  <div class="col-lg-6">
    <div class="component">
      <div class="card magictime">

        <!-- Here Philip is the css selector for changing card color, write your name in the place of philip-->

        <div class="card-title philip">
          <strong>Button</strong>
        </div>
        <div class="card-content">

          <!-- Add your html code for your component inside this. -->

        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="component">
      <div class="card magictime">

        <!-- Here Philip is the css selector for changing card color-->

        <div class="card-title philip">
          <strong>Creator</strong>
        </div>
        <div class="card-content">
          <div class="creater-name">
            <h2>
              <b>Name:</b
              ><span>

              <!-- Add your name and github profile link.  -->

              <a href="profile link">your name </a>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

# Changing card color

You can change your card color by adding your name as a `selector`(in the above example `philip` is the selector). After adding your name as selector you can change its color by editing the file cardcolor.css like this:

```css
/* You can add your name  */
.your-name {
  background-color: #5f067b;
}
```

## commit your changes

Go to the project directory and execute the command git status to view changed files. Add those changes to repo using the following command
```
git add *
```

Lets commit those changes

```
git commit -m "Added new <Your component name>"
```

## Push changes to github

Push your changes using the command `git push`:

```
git push
```

## Submit your changes for review

Go to your repository on GitHub, and click the button `New Pull request` under `Pull request`. View your changes the submit your request to merge with [TinkerHub-GCEK/Tinktober-CSS](https://github.com/TinkerHub-GCEK/Tinktober-CSS).

Soon We will be merging all your changes into the master branch of this project. You will get a notification email once the changes have been merged. Lookout for discussions tab if we want more changes from your end.

### 🥳 Vola! 🥳 You just made a contribution to open source!
