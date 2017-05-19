class ApplicationStarter {
  public static main(args: any) {
    console.log(args);
  }
}
ApplicationStarter.main(process.argv.split(1, process.argv.length));
