package cmd

import (
	"github.com/nsyszr/kueschla/pkg/cmd/server"
	"github.com/spf13/cobra"
)

var serveCmd = &cobra.Command{
	Use: "serve",
	//Short: "",
	Run: server.RunServe(c),
}

func init() {
	RootCmd.AddCommand(serveCmd)

	serveCmd.Flags().IntVar(&c.BindPort, "port", 8080, "The port kueschla should listen on.")
	serveCmd.Flags().StringVar(&c.BindHost, "host", "", "The host interface kueschla should listen on. Leave empty to listen on all interfaces.")
	serveCmd.Flags().StringVar(&c.DatabasePath, "database-path", "kueschla.db", "The path to the database file.")
}
