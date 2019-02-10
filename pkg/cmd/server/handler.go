package server

import (
	"github.com/nsyszr/kueschla/pkg/config"
	"github.com/spf13/cobra"
)

// RunServe starts the kueschla server application
func RunServe(c *config.Config) func(cmd *cobra.Command, args []string) {
	return func(cmd *cobra.Command, args []string) {
	}
}
