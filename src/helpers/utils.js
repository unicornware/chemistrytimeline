// helpers

// jquery
import $ from "jquery";

/**
 * Scrolls the timeline backwards.
 */
export function previous() {
  let amt = $("#timeline").scrollLeft() - $("#col-0").width() * 2.5;
  $("#timeline").animate({ scrollLeft: amt }, 375, "swing");
}

/**
 * Scrolls the timeline forward.
 */
export function next() {
  let amt = $("#timeline").scrollLeft() + $("#col-0").width() * 2.5;

  $("#timeline").animate({ scrollLeft: amt }, 375, "swing");
}
