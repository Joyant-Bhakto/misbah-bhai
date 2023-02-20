import React, {useEffect,useState} from "react";
import Hero from "../Components/Home/Hero";
import CaseStudies from "../Components/Home/CaseStudies";
import Blogs from "../Components/Home/Blogs";
import Hypothesis from "../Components/Home/Hypothesis";

const Home = () => {
  const quantities = [1, 2, 3, 4, 5, 6];
  const quantity = [1, 2, 3];
    const [itemRows, setItemRows] = useState([]);
    const [loading, setLoading] = useState(false);

    const sortAndSetCategory = (array) => {
        const allTagsWithCount = array?.reduce((tagsWithCount, currentTag) => {
            tagsWithCount[currentTag] = (tagsWithCount[currentTag] || 0) + 1; // increment the number of counts of a tag
            return tagsWithCount;
        }, {});

        // sort the tag(key) according its count
        const sortedTagsArray = Object.keys(allTagsWithCount).sort(
            (a, b) => allTagsWithCount[b] - allTagsWithCount[a]
        );
        return sortedTagsArray;
    };

    const mediumURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@misbahhimel";

    useEffect(() => {
        fetch(mediumURL)
            .then((res) => res.json())
            .then((data) => {
                const {
                    feed: { image, link },
                    items,
                } = data || {};

                const posts = items.filter((item) => item.categories.length > 0);

                const tagArrays = posts.map((item) => item.categories);

                const allTags = tagArrays.flat();

                const sortedTagsArray = sortAndSetCategory(allTags) || [];

                // console.log(sortedTagsArray);
                const tagArticle = [];
                let removedBlogs = posts;
                for (let i = 0; i < sortedTagsArray.length; i += 1) {
                    const blogsWithTag = removedBlogs.filter((blog) =>
                        blog.categories.includes(sortedTagsArray[i])
                    ); // filter

                    removedBlogs = removedBlogs.filter(
                        (blog) => blogsWithTag.indexOf(blog) === -1
                    ); // exclude

                    if (blogsWithTag.length > 0) {
                        blogsWithTag.forEach((item) => {
                            item.tag = sortedTagsArray[i];
                            tagArticle.push(item);
                        });
                    }
                }

                const filteredTagArrays = tagArticle.map((item) => item.tag);
                const filteredSortedTagsArray =
                    sortAndSetCategory(filteredTagArrays) || [];

                tagArticle.forEach((item) => {
                    item.tagNo = filteredSortedTagsArray.indexOf(item.tag) + 1;
                    item.avatar = image; // push avatar inside the json
                    item.profileLink = link; // push profile link inside the JSON
                });

                const tagArticleWithRow = [];

                tagArticle.forEach((item, i) => {
                    const row = Math.floor(i / 3);
                    if (!tagArticleWithRow[row]) tagArticleWithRow[row] = [];
                    tagArticleWithRow[row].push(item);
                });

                setItemRows(tagArticleWithRow);
                setLoading(true);
                console.log(data)
            });
    }, []);

  return (
    <>
      <Hero />
      <CaseStudies />
      <Blogs quantities={quantities} />
      <Hypothesis quantity={quantity} />
    </>
  );
};

export default Home;
