import { pathToRoot, slugTag } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { QuartzPluginData } from "../plugins/vfile"
import { GlobalConfiguration } from "../cfg"
import { i18n } from "../i18n"
import tagListStyles from "./styles/tagList.scss"
import { classNames } from "../util/lang"

interface Options {
  type: string
}

const defaultOptions = (): Options => ({ type: "default" })

export default ((userOpts?: Partial<Options>) => {
  const TagList: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const opts = { ...defaultOptions(), ...userOpts }
    const tags = fileData.frontmatter?.tags
    const baseDir = pathToRoot(fileData.slug!)
    const classes = opts.type === "default" ? classNames(displayClass, "tags") : classNames(displayClass, "tags", "strict")
    if (tags && tags.length > 0) {
      return (
        <ul class={classes}>
          {tags.map((tag) => {
            const linkDest = baseDir + `/tags/${slugTag(tag)}`
            return (
              <li>
                <a href={linkDest} class="internal tag-link">
                  {tag}
                </a>
              </li>
            )
          })}
        </ul>
      )
    } else {
      return null
    }
  }
  TagList.css = tagListStyles

  return TagList
})



// TagList.css = tagListStyles
// `
// .tags {
//   list-style: none;
//   display: flex;
//   padding-left: 0;
//   gap: 0.4rem;
//   margin: 1rem 0;
//   flex-wrap: wrap;
//   justify-self: start;
// }
//
// .section-li > .section > .tags {
//   justify-content: flex-end;
// }
//   
// .tags > li {
//   display: inline-block;
//   white-space: nowrap;
//   margin: 0;
//   overflow-wrap: normal;
// }
//
// a.internal.tag-link {
//   border-radius: 8px;
//   background-color: var(--highlight);
//   padding: 0.2rem 0.4rem;
//   margin: 0 0.1rem;
// }
// `

// export default (() => TagList) satisfies QuartzComponentConstructor
