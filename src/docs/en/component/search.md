---
path: "/component/search"
subnav: "3/Navigation/Navigation/8"
lang: "en"
title: "Search"
---

<helmet>
<title> Search - Aurora Design System </title>
</helmet>

# Search

Search bars help the user find relevant content within your site or application. Search bars are a universal feature that is expected on most sites, particularly ones with large amounts of content.

Search bars are located in the top-right of the webpage, and function similarly to a form field, where the user can input keywords to create an output from the system.

Search bars in this system use placeholder text using the term _Search_

There are two style options for search:

**Option 1**

Text field with a padding of 12px. On the right of the field there is a search icon that serves as an action button. The icon is sized at 1.2 em and coloured with <badge style="background-color: #666666">#666666</badge>.

<form>
    <div class="form-inline search-form">
        <label for="search" class="sr-only">Search</label>
        <input type="text" class="form-control" id="search" placeholder="Search">
        <span class="search-form-addon">
        <button type="submit"><span class="sr-only">Search</span><span class="fa fa-search"></span></button>
        </span>
    </div>
</form>

<codeblock html='
    <form>
        <div class="form-inline search-form">
            <label for="search" class="sr-only">Search</label>
            <input type="text" class="form-control" id="search" placeholder="Search">
            <span class="search-form-addon">
            <button type="submit"><span class="sr-only">Search</span><span class="fa fa-search"></span></button>
            </span>
        </div>
    </form>
' react=''></codeblock>

**Option 2**

The same as option 1 with a border radius of 17px.

<form>
    <div class="form-inline search-form search-form-round">
        <label for="search2" class="sr-only">Search</label>
        <input type="text" class="form-control" id="search2" placeholder="Search">
        <span class="search-form-addon">
        <button type="submit"><span class="sr-only">Search</span><span class="fa fa-search"></span></button>
        </span>
    </div>
</form>

<codeblock html='
    <form>
        <div class="form-inline search-form search-form-round">
            <label for="search" class="sr-only">Search</label>
            <input type="text" class="form-control" id="search" placeholder="Search">
            <span class="search-form-addon">
            <button type="submit"><span class="sr-only">Search</span><span class="fa fa-search"></span></button>
            </span>
        </div>
    </form>
' react=''></codeblock>

## Using an icon

Search bars may include a magnifying glass icon depending on the functionality of the search bar. 

If completing a query leads to a new search results page, use the icon. If the search results are auto-populated below the search bar, no icon is required. 

