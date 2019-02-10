package cmd

import (
	"fmt"
	"os"

	"github.com/nsyszr/kueschla/pkg/config"
	"github.com/spf13/cobra"
)

var (
	// Version of kueschla
	Version = "master"
	// BuildTime of kueschla
	BuildTime = "undefined"
	// GitHash of kueschla
	GitHash = "undefined"
)

var c = new(config.Config)

// var cmdHandler = cli.NewHandler(c)

// RootCmd represents the base command when called without any subcommands
var RootCmd = &cobra.Command{
	Use: "kueschla",
	//Short: "",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println(cmd.UsageString())
		os.Exit(2)
	},
}

// Execute runs the idaas and is called by main.main()
func Execute() {
	c.BuildTime = BuildTime
	c.BuildVersion = Version
	c.BuildHash = GitHash

	if err := RootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
