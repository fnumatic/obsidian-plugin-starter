import {   Plugin } from "obsidian";

export default class TestPlugin extends Plugin {
  onload = async () => {
    console.log("loading test plugin");
  };

}
