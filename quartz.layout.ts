import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "reddiana@GitHub": "https://github.com/reddiana",
      //"Discord Community": "https://discord.gg/cRFFHYye7t",
      "reddiana@Facebook": "https://www.facebook.com/reddiana",
      "공부하는회사원@YouTube": "https://www.youtube.com/@%EA%B3%B5%EB%B6%80%ED%95%98%EB%8A%94%ED%9A%8C%EC%82%AC%EC%9B%90%EB%B9%A8%EA%B0%95%EB%8B%AC",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
    // Component.DesktopOnly(Component.RecentNotes({
    //     limit: 5,
    //     showTags: false,
    // })),
  ],
  right: [
	Component.MobileOnly(Component.Explorer()),
    Component.Graph({
      localGraph: {
        // drag: true, // whether to allow panning the view around
        // zoom: true, // whether to allow zooming in and out
        depth: 2, // how many hops of notes to display
        // scale: 0.5, // 1.1, // default view scale
        // repelForce: 0.5, // how much nodes should repel each other
        // centerForce: 0.3, // how much force to use when trying to center the nodes
        // linkDistance: 30, // how long should the links be by default?
        // fontSize: 0.6, // what size should the node labels be?
        opacityScale: 2, // 1, // how quickly do we fade out the labels when zooming out?
        // removeTags: [], // what tags to remove from the graph
        // showTags: true, // whether to show tags in the graph
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9, // 0.9,
        repelForce: 0.6,
        centerForce: 1.0, // 0.3,
        linkDistance: 80, // 30,
        fontSize: 0.8,
        opacityScale: 3, // 1,
        removeTags: [], // what tags to remove from the graph
        showTags: false, // true, // whether to show tags in the graph
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(Component.Backlinks()),
    //Component.MobileOnly(Component.RecentNotes({
    //    limit: 5,
    //    showTags: false,
    //})),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
